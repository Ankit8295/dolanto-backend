CREATE DATABASE dolantoadmin;

-- homepage card table
CREATE TABLE homepageDetails (id SERIAL PRIMARY KEY, card_id VARCHAR(255), image_url VARCHAR(255), title VARCHAR(255), description VARCHAR);

CREATE TABLE jobDetails (id SERIAL PRIMARY KEY, title VARCHAR(255), description VARCHAR, department VARCHAR(255), tags TEXT[], tasks TEXT[], terms TEXT[], expectations TEXT[]);

  {
    title: "Product Designer",
    description: "We’re Looking for a mid-level designer to join our team",
    department: "Design",
    tags: ["100% Remote", "Full-Time"],
    tasks: [
      "Reception, diagnosis and treatment of animals with cardiological diseases",
      "Conducting ECHOKG, ECG, dopplerography, preoperative heart screenshots; interpretation of research results",
      "Study of the causes of occurrence, the processes of the disease",
      "Development of treatment methods",
      "The use of medicines",
    ],
    terms: [
      "Reception, diagnosis and treatment of animals with cardiological diseases",
      "Conducting ECHOKG, ECG, dopplerography, preoperative heart screenshots; interpretation of research results",
      "Study of the causes of occurrence, the processes of the disease",
      "Development of treatment methods",
      "The use of medicines",
    ],
    expectations: [
      "Reception, diagnosis and treatment of animals with cardiological diseases",
      "Conducting ECHOKG, ECG, dopplerography, preoperative heart screenshots; interpretation of research results",
      "Study of the causes of occurrence, the processes of the disease",
      "Development of treatment methods",
      "The use of medicines",
    ],
  },