export default function Home() {
  return (
    <section id="home">
      <div className="profile-container">
        <div className="profile-photo">
          <img
            src="/profile.jpg"
            alt="Abhiram Kumar"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', borderRadius: '50%'
            }}
          />
        </div>
      </div>
      <div className="home-content">
        <h1>Hi, I'm <span>Abhiram</span></h1>
        <p>I'm a passionate developer with expertise in AI, NLP, and full-stack development.
           I love creating innovative solutions that make a difference.</p>
      </div>
    </section>
  );
}