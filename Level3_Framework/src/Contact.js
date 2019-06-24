import React from "react";

function Contact() {
    document.title = 'Contact Us | Dirty Dogs';
    const formURL = 'https://formula-test-api.herokuapp.com/contact';
    function submitHandler(event){
        event.preventDefault();
        function showPopUp(selector) {
            const popup = selector;
            popup.classList.add('active');
            setTimeout(() => {
                popup.classList.remove('active');
            }, 4000);
        }
        let form = event.target;
        let elems = event.target.elements;
        let body = {}, submitFlag = true;
        Array.prototype.forEach.call(elems, (j) => {
            j.classList.remove('err');
            if (j['type'] !== 'submit') {
                body[j['name']] = j['value'];
                if (!j['value']) {
                    j.classList.add('err');
                }
                submitFlag &= !!j['value'];
            }
            if (j['type'] === 'email') {
                const rE = new RegExp("^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,}$", 'i');
                if (rE.test(j['value'])) {
                    submitFlag = true;
                    j.classList.remove('err');
                } else {
                    submitFlag = false;
                    j.classList.add('err');
                }
            }
        });
        if (submitFlag) {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', formURL, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (this.readyState !== 4) return;
                if (Math.floor(xhr.status / 100) !== 2) {
                    console.log('error');
                    console.log(this.responseText);
                    showPopUp(form.closest('.main_contact').querySelector('.modal-error'));
                } else {
                    console.log('success');
                    console.log(this.responseText);
                    showPopUp(form.closest('.main_contact').querySelector('.modal-success'));
                }
            };
            xhr.send(JSON.stringify(body));
        }
    };
    return (
        <section className="main_contact">
            <div className="container">
                <div className="main_contact__wrapper">
                    <form className="main_contact__form" onSubmit={submitHandler}>
                        <input type="text" name="name" placeholder="Name" autoComplete="off" className="main_contact__form-input" />
                        <input type="email" name="email" placeholder="Email" autoComplete="off" className="main_contact__form-input" />
                        <textarea name="comment" rows="3" placeholder="Comment" autoComplete="off" className="main_contact__form-input main_contact__form-textarea"></textarea>
                        <input type="submit" name="submit" value="Submit" className="main_contact__form-input main_contact__form-submit" />
                    </form>
                </div>
            </div>
            <div className="modal modal-success">
                <p className="modal_message">Your message has been received</p>
            </div>
            <div className="modal modal-error">
                <p className="modal_message">There was some error while receiving your message</p>
            </div>
        </section>
    );
}

export default Contact;