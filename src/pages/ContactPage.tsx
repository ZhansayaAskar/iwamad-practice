function ContactPage() {
    return (
      <section className="profile-card bg-white p-6 border border-gray-200 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
  
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-gray-700">Feel free to reach out:</p>
          <a
            href="mailto:askarzhansaya7@gmail.com"
            className="text-blue-600 hover:underline"
          >
            askarzhansaya7@gmail.com
          </a>
          <a
            href="https://github.com/ZhansayaAskar"
            target="_blank"
            rel="noopener"
            className="text-blue-600 hover:underline"
          >
            github.com/ZhansayaAskar
          </a>
        </div>
      </section>
    );
  }
  
  export default ContactPage;