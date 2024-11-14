<script>
    let username = '';
    let password = '';
  
    function login() {
      if (username === 'user' && password === 'pass') {
        localStorage.setItem('loggedIn', true);
        window.location.hash = '/home';
      } else {
        alert('Invalid username or password');
      }
    }
  </script>
  
  <div class="login-container">
    <h1>Login</h1>
    <input type="text" placeholder="Username" bind:value={username} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button on:click={login}>Login</button>
  </div>
  
  <style>
    .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 300px;
      margin: 0 auto;
      padding-top: 5rem;
    }
    input {
      margin: 0.5rem;
      padding: 0.5rem;
      width: 100%;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: blue;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>