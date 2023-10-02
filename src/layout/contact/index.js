import React from 'react';
import "./style.css";
import { Slide } from 'react-awesome-reveal';
function Contact() {
  return (
    <section id="contact">
      <h3 className="section__title">تواصل معنا</h3>
      <p>يمكنك ارسال رسالة لنا من هنا للتواصل عبر البريد الالكتروني</p>
      <form action="#">
        <Slide>
          {" "}
          <input type="text" name="name" placeholder="أدخل اسمك" required />
        </Slide>
        <Slide direction={"down"}>
          {" "}
          <input type="email" name="email" placeholder="أدخل بريدك الالكتروني" required />
        </Slide>
        <Slide direction={"left"}>
          {" "}
          <input type="text" name="phone" placeholder="أدخل رقم التليفون" required />
        </Slide>
        <Slide direction={"right"}>
          {" "}
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="أدخل الرسالة"
            required
          ></textarea>
        </Slide>
        <Slide direction={"up"}>
          {" "}
          <button className="btn btn-success">إرسال</button>
        </Slide>
      </form>
    </section>
  );
}

export default Contact;
