import React from "react";
import SectionHeader from "./SectionHeader";
import githubImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-dark text-primary font-outfit py-16 px-4 flex flex-col items-center"
    >
      <SectionHeader title="CONTACT" />

      <div className="max-w-3xl mx-auto text-center mt-24">
        <p className="text-3xl mb-24">
          Envie de collaborer ensemble ? N'hésitez pas à me contacter !
        </p>

        <a
          href="mailto:chamsedine.amouche@gmail.com"
          className="inline-flex items-center justify-center bg-[var(--color-lightDark)] text-[var(--color-primary)] rounded px-8 py-4 border border-[var(--color-darkPrimary)] hover:bg-opacity-80 transition-colors mb-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Me contacter par email
        </a>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/ChamsedineAmouche"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="Github" className="w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/chamsedine-amouche-192022239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImg} alt="LinkedIn" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;