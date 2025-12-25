import { useState } from "react";

/* ---------------------------
   MOCK DATA (CORE PAIN POINT)
----------------------------*/
const BATCHES = {
  Delhi: {
    "October 2025": [{ status: "Full", seats: 0 }],
    "November 2025": [{ status: "Open", seats: 12 }],
    "December 2025": [{ status: "Planned", seats: null }],
  },
  Mumbai: {
    "October 2025": [{ status: "Open", seats: 8 }],
    "November 2025": [],
    "December 2025": [],
  },
};

/* ---------------------------
   MAIN APP
----------------------------*/
export default function App() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [alignmentScore, setAlignmentScore] = useState(0);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header step={step} />

      {step === 1 && <Eligibility onNext={() => setStep(2)} />}
      {step === 2 && <Alignment onNext={(s) => { setAlignmentScore(s); setStep(3); }} />}
      {step === 3 && <BatchDiscovery />}
    </div>
  );
}

/* ---------------------------
   STEP 1: ELIGIBILITY
----------------------------*/
function Eligibility({ onNext }) {
  const [memberNo, setMemberNo] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Card>
      <h2>Step 1: ICAI Eligibility</h2>

      <input placeholder="ICAI Membership No"
        value={memberNo}
        onChange={(e) => setMemberNo(e.target.value)}
        style={input}
      />

      <input placeholder="Registered Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={input}
      />

      <button style={btn} onClick={() => {
        if (!memberNo || !email) {
          alert("Both fields required");
          return;
        }
        onNext();
      }}>
        Verify & Continue
      </button>
    </Card>
  );
}

/* ---------------------------
   STEP 2: ALIGNMENT
----------------------------*/
function Alignment({ onNext }) {
  const [answers, setAnswers] = useState([false, false, false, false, false]);

  const toggle = (i) => {
    const copy = [...answers];
    copy[i] = !copy[i];
    setAnswers(copy);
  };

  return (
    <Card>
      <h2>Step 2: Course Alignment</h2>

      {[
        "Apply AI in professional work",
        "Comfortable with advanced learning",
        "Can commit time for projects",
        "Interested in AI tools",
        "Ready for peer learning",
      ].map((q, i) => (
        <label key={i} style={{ display: "block", marginBottom: 8 }}>
          <input type="checkbox" onChange={() => toggle(i)} /> {q}
        </label>
      ))}

      <button style={btn} onClick={() => {
        const score = answers.filter(Boolean).length;
        if (score < 3) {
          alert("Alignment low. Counselling recommended.");
          return;
        }
        onNext(score);
      }}>
        Continue
      </button>
    </Card>
  );
}

/* ---------------------------
   STEP 3: CORE PAIN POINT
----------------------------*/
function BatchDiscovery() {
  const [location, setLocation] = useState("Delhi");

  return (
    <Card>
      <h2>Step 3: Location-wise Batch Visibility</h2>

      <select value={location} onChange={(e) => setLocation(e.target.value)} style={input}>
        {Object.keys(BATCHES).map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>

      {Object.entries(BATCHES[location]).map(([month, batches]) => (
        <div key={month} style={monthBox}>
          <strong>{month}</strong>

          {batches.length === 0 && <p>No batch scheduled</p>}

          {batches.map((b, i) => (
            <p key={i}>
              Status: <b>{b.status}</b>
              {b.seats !== null && ` | Seats: ${b.seats}`}
            </p>
          ))}
        </div>
      ))}

      <p style={{ marginTop: 10, color: "green" }}>
        ✔ Future batches visible → no forced outstation travel
      </p>
    </Card>
  );
}

/* ---------------------------
   UI HELPERS
----------------------------*/
function Header({ step }) {
  return (
    <div style={header}>
      <h1>AICA Level-2 Registration</h1>
      <p>Step {step} of 3</p>
    </div>
  );
}

function Card({ children }) {
  return (
    <div style={card}>
      {children}
    </div>
  );
}

/* ---------------------------
   STYLES
----------------------------*/
const card = {
  maxWidth: 600,
  margin: "30px auto",
  padding: 20,
  border: "1px solid #ddd",
  borderRadius: 8,
};

const header = {
  textAlign: "center",
  padding: 20,
  borderBottom: "1px solid #eee",
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
};

const btn = {
  width: "100%",
  padding: 12,
  background: "#2563eb",
  color: "#fff",
  border: "none",
};

const monthBox = {
  border: "1px solid #eee",
  padding: 10,
  marginTop: 10,
};
