// EmailJS: replace these three public values after creating a service/template in EmailJS.
const EMAIL_CONFIG={publicKey:"2-ZoCyAW_4SGQYMlj",serviceId:"Aqzara.AI Service",templateId:"template_uk7yjaq"};
const GITHUB_URL="https://github.com/aqzara-ai";

const projects = [
  [
    "AI Smart Traffic Control System",
    "Computer Vision · AI · Real-Time Systems",
    "An AI-powered traffic control prototype that detects emergency vehicles and dynamically prioritizes traffic signals.",
    "Traditional traffic signal systems cannot dynamically respond to emergency vehicles and changing traffic conditions.",
    [
      "Real-time vehicle detection",
      "Emergency vehicle prioritization",
      "Multi-camera simulation",
      "Traffic signal control logic",
      "Confidence display",
      "ETA-based decision concept",
      "Real-time monitoring dashboard"
    ],
    [
      "Python", "YOLO", "OpenCV", "PyTorch",
      "FastAPI", "HTML", "CSS", "JavaScript"
    ],
    "https://github.com/aqzara-ai/AI-Based-Traffic-Control-System-Prioritizing-the-emergency-vehicles-.github.io",
    "images/AI-Traffic.jpg"
  ],

  [
    "Research Paper Intelligence Platform",
    "AI · NLP · RAG",
    "An intelligent platform that processes research documents, searches their content and extracts meaningful insights.",
    "Researchers spend significant time reading, organizing and extracting information from large collections of research papers.",
    [
      "Document processing",
      "Semantic search",
      "RAG architecture",
      "AI-powered question answering",
      "Context-aware retrieval",
      "Structured research insights"
    ],
    [
      "Python", "FastAPI", "LangChain", "RAG",
      "Vector Database", "LLMs", "NLP"
    ],
    "https://github.com/aqzara-ai/Research-Paper-Intelligence-Platform-RAG.github.io",
    "images/PaperIQ.png"
  ],

  [
    "Scam Email Detection System",
    "Machine Learning · NLP · Cybersecurity",
    "A machine-learning system that analyzes email content and identifies potential scam and phishing patterns.",
    "Users receive increasingly sophisticated phishing and scam emails that can be difficult to identify manually.",
    [
      "Text preprocessing",
      "Feature extraction",
      "Classification",
      "Risk prediction",
      "Explainable result presentation",
      "User-friendly interface"
    ],
    [
      "Python", "Pandas", "Scikit-learn", "NLP",
      "Machine Learning", "Flask", "HTML", "CSS", "JavaScript"
    ],
    "https://github.com/aqzara-ai/Scam-Email-Detection.github.io",
    "images/scam-email.png"
  ],

  [
    "NewsSense — AI News Classifier",
    "NLP · Transformers · AI",
    "An AI-powered news classification system using transformer-based NLP.",
    "The enormous volume of online news makes it difficult to automatically understand and categorize information.",
    [
      "Text classification",
      "Transformer-based NLP",
      "Automated categorization",
      "Clean visualization",
      "Fast inference workflow"
    ],
    [
      "Python", "DistilBERT", "Transformers", "NLP",
      "PyTorch", "Flask", "HTML", "CSS", "JavaScript"
    ],
    "https://github.com/aqzara-ai/NewsSense-AI-News-Classifier.github.io",
    "images/News-classifier.png"
  ]
];

const services=[["01","AI & Machine Learning",["Machine Learning","Deep Learning","Computer Vision","NLP","LLM Applications","Predictive Systems"]],["02","AI Engineering",["RAG systems","AI agents","Vector databases","Prompt engineering","AI automation","Model integration"]],["03","Software Development",["Web applications","REST APIs","Backend systems","Admin dashboards","SaaS products"]],["04","Computer Vision",["Object detection","Image classification","OCR","Video analytics","Real-time vision systems"]],["05","Automation",["Workflow automation","Data processing","Business automation","API integrations"]],["06","Digital Products",["MVP development","Product prototypes","Internal tools","Custom software"]]];
const by=q=>document.querySelector(q);
by("#serviceGrid").innerHTML=services.map(s=>`<article class="service-card glass reveal"><span class="num">${s[0]}</span><h3>${s[1]}</h3><ul>${s[2].map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("");

by("#projectGrid").innerHTML = projects.map((p, i) => `
  <article
    class="project-card glass reveal"
    tabindex="0"
    role="button"
    aria-label="View ${p[0]} case study"
    data-i="${i}"
  >
    <div class="project-image" data-number="0${i + 1}">
      <img
        src="${p[7]}"
        alt="${p[0]} project preview"
        loading="lazy"
        onerror="this.style.display='none'"
      >
    </div>

    <div class="project-info">
      <span>${p[1]}</span>
      <h3>${p[0]}</h3>
      <p>${p[2]}</p>
      <b class="view">View Case Study →</b>
    </div>
  </article>
`).join("");


const testimonials = [
  {
    name: "Suhana Gowda",
    degree: "BSc Student",
    feedback: "The guidance I received throughout my final-year project was really helpful. From planning the project to understanding the implementation, each step became easier. The support with project documentation and report preparation also helped me present my work with more confidence."
  },
  {
    name: "Vaishnavi N V",
    degree: "BCA Student",
    feedback: "I received helpful guidance for developing my final-year project and understanding the technical concepts behind it. The assistance with organizing the project report and preparing for the final presentation made the overall process more manageable."
  },
  {
    name: "Adarsh",
    degree: "MSc Student",
    feedback: "The project development guidance helped me understand how to approach the problem, organize the implementation, and improve the final output. I also received support with documentation and explaining the technical work clearly for my academic submission."
  },
  {
    name: "Subhash Kumar",
    degree: "BCA Student",
    feedback: "The support throughout the project was valuable, especially when working through implementation challenges and preparing the final report. The guidance helped me understand the project better and organize my work for the final demonstration."
  },
  {
    name: "Ananda Bendre",
    degree: "MSc Student",
    feedback: "I appreciated the structured guidance during project development, from understanding the requirements to refining the implementation. The help with technical documentation and preparing the final presentation made the project workflow clearer and more organized."
  },
  {
    name: "Jyothi B",
    degree: "BSc Student",
    feedback: "The project guidance helped me approach my final-year work step by step. Getting support with the development process, report structure, and presentation preparation made it easier to understand and explain the work I had completed."
  }
];

by("#testimonials").innerHTML = testimonials.map((t, i) => `
  <article class="testimonial glass reveal" data-testimonial="${i + 1}">
    <div class="quote-mark" aria-hidden="true">“</div>
    <p>${t.feedback}</p>
    <footer>
      <span>
        <b>${t.name}</b>
        <small>${t.degree} · Project Guidance</small>
      </span>
    </footer>
  </article>
`).join("");

// document.querySelectorAll("#testimonials .reveal").forEach(card => {
//   observer.observe(card);
// });

const intro=by("#intro"),site=by("#site");setTimeout(()=>{intro.style.opacity=0;intro.style.filter="blur(5px)";intro.style.transform="scale(1.015)";intro.style.visibility="hidden";site.classList.add("ready");setTimeout(()=>intro.remove(),700)},5000);
const theme=by(".theme-toggle");function setTheme(t){document.body.classList.toggle("light",t==="light");theme.querySelector("span").textContent=t==="light"?"☀":"☾";theme.setAttribute("aria-label",`Switch to ${t==="light"?"dark":"light"} mode`);localStorage.setItem("aqzara-theme",t)}setTheme(localStorage.getItem("aqzara-theme")||"dark");theme.onclick=()=>setTheme(document.body.classList.contains("light")?"dark":"light");
const menu=by(".menu-toggle"),links=by(".nav-links"),scrim=by(".menu-scrim");function closeMenu(){links.classList.remove("open");scrim.classList.remove("open");menu.setAttribute("aria-expanded","false");document.body.style.overflow=""}function toggleMenu(){const open=!links.classList.contains("open");links.classList.toggle("open",open);scrim.classList.toggle("open",open);menu.setAttribute("aria-expanded",open);document.body.style.overflow=open?"hidden":""}menu.onclick=toggleMenu;scrim.onclick=closeMenu;links.querySelectorAll("a").forEach(a=>a.onclick=closeMenu);addEventListener("scroll",()=>by(".nav").classList.toggle("scrolled",scrollY>20),{passive:true});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const backdrop=by("#modalBackdrop"),modal=by("#projectModal");function openProject(i){const p=projects[i];by("#modalContent").innerHTML=`<p class="modal-kicker">CASE STUDY / 0${i+1}</p><h2>${p[0]}</h2><p class="lead">${p[1]}</p><div class="modal-grid"><div><h3>Project Overview</h3><p>${p[2]}</p><h3>Problem Statement</h3><p>${p[3]}</p><h3>Our Solution</h3><p>${p[2]}</p></div><div><h3>What I Added</h3><ul>${p[4].map(x=>`<li>${x}</li>`).join("")}</ul><h3>Technology Stack</h3><div class="techs">${p[5].map(x=>`<span>${x}</span>`).join("")}</div><h3>Impact / Outcome</h3><p>A focused, practical prototype that makes the underlying challenge easier to understand and act on.</p><a class="button github-button" href="${p[6]}" target="_blank" rel="noopener noreferrer" aria-label="View AQZARA GitHub for ${p[0]}">View AQZARA GitHub ↗</a></div></div>`;backdrop.classList.add("open");backdrop.setAttribute("aria-hidden","false");modal.showModal();document.body.style.overflow="hidden";modal.querySelector(".modal-close").focus()}function closeModal(){modal.close();backdrop.classList.remove("open");backdrop.setAttribute("aria-hidden","true");document.body.style.overflow=""}by("#projectGrid").onclick=e=>{const c=e.target.closest(".project-card");if(c)openProject(c.dataset.i)};by("#projectGrid").onkeydown=e=>{const c=e.target.closest(".project-card");if(c&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openProject(c.dataset.i)}};by(".modal-close").onclick=closeModal;backdrop.onclick=e=>{if(e.target===backdrop)closeModal()};addEventListener("keydown",e=>{if(e.key==="Escape"){if(backdrop.classList.contains("open"))closeModal();if(links.classList.contains("open"))closeMenu()}});
if(window.emailjs&&EMAIL_CONFIG.publicKey!=="YOUR_EMAILJS_PUBLIC_KEY")emailjs.init({publicKey:EMAIL_CONFIG.publicKey});
by("#contactForm").onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,status=form.querySelector(".form-status"),submit=form.querySelector('button[type="submit"]'),label=submit.querySelector("span");if(!form.checkValidity()){form.reportValidity();status.textContent="Please complete the required fields.";return}if(!window.emailjs||EMAIL_CONFIG.publicKey==="YOUR_EMAILJS_PUBLIC_KEY"){status.textContent="Email delivery is not configured yet. Please email me directly at helloaqzara.ai@gmail.com.";return}submit.disabled=true;label.textContent="Sending…";status.textContent="";try{await emailjs.send(EMAIL_CONFIG.serviceId,EMAIL_CONFIG.templateId,{name:form.name.value,email:form.email.value,company:form.company.value,project_type:form.type.value,budget:form.budget.value,message:form.message.value,to_email:"helloaqzara.ai@gmail.com"});status.textContent="Thank you. Your enquiry has been sent successfully. I'll get back to you soon.";form.reset()}catch{status.textContent="Something went wrong while sending your enquiry. Please email me directly at helloaqzara.ai@gmail.com."}finally{submit.disabled=false;label.textContent="Start a Conversation"}};
if(matchMedia("(pointer:fine)").matches)addEventListener("pointermove",e=>by(".cursor-glow").style.transform=`translate(${e.clientX-175}px,${e.clientY-175}px)`);
