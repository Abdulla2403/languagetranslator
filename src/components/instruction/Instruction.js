import React from "react";
import styled from "styled-components";
import { instructionData } from "./InstructionData";

export default function Instruction() {
  return (
    <ForInstruction>
      {instructionData.map((item, index) => {
        return (
          <ForInstructionData key={index}>
            <ForInstructionDiv
              style={{
                backgroundColor: `${item.color}`,
              }}
            >
              <p
                style={{
                  fontSize: "35px",
                  fontWeight: "900",
                  // backgroundColor: `${item.textColor}`,

                  color: `${item.textColor}`,
                }}
              >
                {item.id}
              </p>
            </ForInstructionDiv>

            <p
              style={{
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0px",
                textAlign: "center",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              {item.description}
            </p>
          </ForInstructionData>
        );
      })}
    </ForInstruction>
  );
}

const ForInstruction = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 0px;
  padding-top: 0px;
  border-top: 1px solid #e6e6e6;

  /* @media (max-width: 768px) {
  font-size: 30px;

   padding:20px 40px ;
  } */
`;
const ForInstructionData = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  border-radius: 10px;
  margin: 10px 30px;

  @media (max-width: 768px) {
    width: 250px;
    height: 230px;
    padding-top: 0px;
    margin: 0px 0px;
  }
`;

const ForInstructionDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;
