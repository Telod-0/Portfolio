const EMAILJS_PUBLIC_KEY = "XuOGS6Pl0oOrVHMbt";
const EMAILJS_SERVICE_ID = "service_va91ckg";
const EMAILJS_TEMPLATE_ID = "template_w2sulco";

const contactForm = document.querySelector("#contact-form-fields");
const contactFormStatus = document.querySelector("#contact-form-status");

function setContactStatus(type, message, includeEmailLink = false) {
  contactFormStatus.className = `contact-form__status is-${type}`;
  contactFormStatus.replaceChildren(document.createTextNode(message));

  if (includeEmailLink) {
    const emailLink = document.createElement("a");
    emailLink.href = "mailto:alessioprovenza5259@gmail.com";
    emailLink.textContent = "alessioprovenza5259@gmail.com";
    contactFormStatus.append(emailLink);
  }
}

const isConfigured = [
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
].every((value) => value && !value.startsWith("YOUR_"));

if (contactForm && contactFormStatus) {
  if (window.emailjs && isConfigured) {
    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    } catch (error) {
      console.error("EmailJS init failed:", error);
    }
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    contactFormStatus.className = "contact-form__status";
    contactFormStatus.replaceChildren();

    if (!isConfigured) {
      setContactStatus(
        "error",
        "The contact form is not connected. Email me at ",
        true,
      );
      return;
    }

    if (!window.emailjs) {
      setContactStatus(
        "error",
        "The contact form could not load. Email me at ",
        true,
      );
      return;
    }

    const submitButton = contactForm.querySelector('[type="submit"]');
    submitButton.disabled = true;
    setContactStatus("pending", "Sending…");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactForm,
      );
      contactForm.reset();
      setContactStatus("success", "Message sent successfully. Thank you!");
    } catch (error) {
      console.error("EmailJS contact form failed:", {
        status: error?.status,
        text: error?.text,
        error,
      });
      setContactStatus(
        "error",
        "Message could not be sent. Email me at ",
        true,
      );
    } finally {
      submitButton.disabled = false;
    }
  });
}
