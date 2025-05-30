import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const indianLanguages = [
  { name: "Assamese", code: "as" },
  { name: "Bengali", code: "bn" },
  { name: "Gujarati", code: "gu" },
  { name: "Hindi", code: "hi" },
  { name: "Kannada", code: "kn" },
  { name: "Kashmiri", code: "ks" },
  { name: "Konkani", code: "gom" },
  { name: "Maithili", code: "mai" },
  { name: "Malayalam", code: "ml" },
  { name: "Manipuri", code: "mni-Mtei" },
  { name: "Marathi", code: "mr" },
  { name: "Nepali", code: "ne" },
  { name: "Odia", code: "or" },
  { name: "Punjabi", code: "pa" },
  { name: "Sanskrit", code: "sa" },
  { name: "Santali", code: "sat" },
  { name: "Sindhi", code: "sd" },
  { name: "Tamil", code: "ta" },
  { name: "Telugu", code: "te" },
  { name: "Urdu", code: "ur" },
];

export default function Center() {
  const [text, setText] = useState("");
  const [transText, setTransText] = useState("");
  const [selectedLang, setSelectedLang] = useState("hi");
  const [showAlertMessage, setShowAlertMessage] = useState(null);

  const handleInputChange = (e) => setText(e.target.value);

  const translateText = async () => {
    if (text === "") {
      setShowAlertMessage(true);
      setTimeout(() => setShowAlertMessage(false), 2000);
      return;
    }

    const encodedParams = new URLSearchParams();
    encodedParams.append("text", text);
    encodedParams.append("to", selectedLang);
    encodedParams.append("from", "en");

    try {
      const res = await axios({
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        headers: {
          Accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key": "26a1711900mshdf5ae28e41da9e7p126829jsn286668a4613a",
          "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
        },
        data: encodedParams,
      });
      setTransText(res.data.trans);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <CenterContainer>
      <Box>
        <Column>
          <Input
            onChange={handleInputChange}
            value={text}
            placeholder="Type here in English"
          />
          <Label>Select Language to Translate</Label>
          <Select onChange={(e) => setSelectedLang(e.target.value)} value={selectedLang}>
            {indianLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </Select>
          <Button onClick={translateText}>Translate</Button>
          {showAlertMessage && (
            <AlertMessage>
              <span>*Please enter text to translate*</span>
            </AlertMessage>
          )}
        </Column>
        
        <Column>
          <Label>Translated Text</Label>
          <Output value={transText} readOnly placeholder="Translation appears here..." />
        </Column>
      </Box>
    </CenterContainer>
  );
}

// Styled Components
const CenterContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Input = styled.textarea`
  min-height: 150px;
  resize: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Output = styled.textarea`
  min-height: 150px;
  resize: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const AlertMessage = styled.div`
  color: red;
  font-size: 14px;
`;

