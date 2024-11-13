export async function fetchMessage() {
    try {
      const response = await fetch('http://127.0.0.1:3030/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error fetching message:', error);
      return 'Error fetching message';
    }
  }
  