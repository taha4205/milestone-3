"use strict";
var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault();
    const name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    const email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    const phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value;
    const education = (_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value;
    const experience = (_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value;
    const skills = (_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value;
    const resumeContent = `
      <h2>${name}</h2>
      <h3>Contact</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
  `;
    document.getElementById('resume-display').innerHTML = resumeContent;
    document.getElementById('resume-form').style.display = "none";
});
