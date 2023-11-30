import styled from "styled-components";

const AddFeedback = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  font-weight: 500;
`;
const TypeYourFeedback = styled.i`
  position: absolute;
  top: 78px;
  left: 24px;
  font-weight: 300;
  color: var(--color-lightslategray);
`;
const FeedbackRoot = styled.div`
  border-radius: var(--br-lg);
  background-color: var(--color-white);
  width: 834px;
  height: 228px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  position: relative;
`;

const Feedback = () => {
  return (
    <FeedbackRoot>
      <AddFeedback>Add feedback</AddFeedback>
      <TypeYourFeedback>Type your feedback</TypeYourFeedback>
    </FeedbackRoot>
  );
};

export default Feedback;
