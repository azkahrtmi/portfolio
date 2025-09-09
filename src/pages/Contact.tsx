import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section className="text-white py-16" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h1 className="bg-gradient-to-r from-white to-gray-700 text-transparent bg-clip-text text-2xl md:text-4xl font-extrabold hover:translate-x-2 transition-transform duration-300 ease-in-out pb-7">
            <span>__</span>&nbsp;GET IN TOUCH
          </h1>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-xl shadow-lg p-10 grid md:grid-cols-2 gap-10 md:gap-60">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-300">
                Contact Information
              </h3>

              <div className="flex items-center gap-3">
                <div className="bg-[#222] p-3 rounded-md">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-200">azka.hartamii@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#222] p-3 rounded-md">
                  <Phone className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-200">+62 81275939914</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#222] p-3 rounded-md">
                  <MapPin className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-200">Riau, Indonesia</span>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="space-y-6"
              action="https://formspree.io/f/xblawjpy"
              method="POST"
            >
              <h2 className="font-extrabold">Send Me a Message</h2>
              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  className="w-full mt-2 p-3 rounded-md bg-[#0a0a0a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                  className="w-full mt-2 p-3 rounded-md bg-[#0a0a0a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What would you like to say?"
                  className="w-full mt-2 p-3 rounded-md bg-[#0a0a0a] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
