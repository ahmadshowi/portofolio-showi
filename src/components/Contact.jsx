import React from 'react';
import '../styles/Contact.css';


const Contact = () => (
<section className="contact" id="contact">
<h2>Contact</h2>
<form>
<input type="text" placeholder="Nama" required />
<input type="email" placeholder="Email" required />
<textarea placeholder="Pesan" required></textarea>
<button type="submit">Kirim</button>
</form>
</section>
);


export default Contact;