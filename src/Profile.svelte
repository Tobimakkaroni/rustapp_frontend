<script>
    import Navbar from './Navbar.svelte';
  
    let userProfile = { name: 'User', age: 25 };
  </script>
  
  <Navbar />
  <div class="profile-content">
    <h2>Profile</h2>
    <p>Name: {userProfile.name}</p>
    <p>Age: {userProfile.age}</p>
  </div>
  
  <style>
    .profile-content {
      text-align: center;
      padding: 2rem;
    }
  </style>