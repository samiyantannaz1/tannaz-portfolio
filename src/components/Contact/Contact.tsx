import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";

import "./Contact.css";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import toast from "react-hot-toast";

type FormData = {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const sendEmail: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    try {


await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: data.from_name,
    from_email: data.from_email,
    subject: data.subject,
    message: data.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      toast.success("Message sent successfully 🎉");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title text-center">
          <h2>Contact Me</h2>

          <p>
            Have a project in mind?
            <br />
            Let's build something amazing together.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Left Side */}

          <div className="col-lg-5">
            <div className="contact-info">
              <div className="info-card">
                <Mail className="icon" />

                <div>
                  <h5>Email</h5>

                  <a href="mailto:samiyantannaz1@gmail.com">
                    samiyantannaz1@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <Phone className="icon" />

                <div>
                  <h5>Phone</h5>

                  <a href="tel:09105106627">
                    09105106627
                  </a>
                </div>
              </div>

              <div className="info-card">
                <MapPin className="icon" />

                <div>
                  <h5>Location</h5>

                  <span>Tehran, Iran</span>
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/samiyantannaz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tannaz-samiyan-69a884395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="col-lg-7">
            <form
              className="contact-form"
              onSubmit={handleSubmit(sendEmail)}
              autoComplete="on"
              noValidate
            >
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                disabled={loading}
                {...register("from_name", {
                  required: "Name is required",
                })}
              />

              {errors.from_name && (
                <small>{errors.from_name.message}</small>
              )}

              <input
                type="email"
                placeholder="Your Email"
                autoComplete="email"
                disabled={loading}
                {...register("from_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.from_email && (
                <small>{errors.from_email.message}</small>
              )}

              <input
                type="text"
                placeholder="Subject"
                autoComplete="off"
                disabled={loading}
                {...register("subject", {
                  required: "Subject is required",
                })}
              />

              {errors.subject && (
                <small>{errors.subject.message}</small>
              )}

              <textarea
                rows={6}
                placeholder="Your Message"
                autoComplete="off"
                disabled={loading}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters",
                  },
                })}
              />

              {errors.message && (
                <small>{errors.message.message}</small>
              )}

              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      role="status"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;