import { useState } from 'react';

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);
const faqs = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    question: "Why do we use Lorem Ipsum?",
    answer:
      "Lorem Ipsum is used as placeholder text in the graphic, print, and publishing industries. It is a way to demonstrate the visual form of a document without the distraction of meaningful content.",
  },
  {
    id: 3,
    question: "Is Lorem Ipsum readable?",
    answer:
      "While Lorem Ipsum itself is not meaningful text, it resembles readable text, making it suitable for design mockups and layouts.",
  },
  {
    id: 4,
    question: "Where does Lorem Ipsum come from?",
    answer:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
  },
  {
    id: 5,
    question: "Is Lorem Ipsum still relevant?",
    answer:
      "Yes, Lorem Ipsum is still widely used in the design and typesetting industry as a placeholder text. However, there are alternative placeholder texts available as well.",
  },
  {
    id: 6,
    question: "Can I customize Lorem Ipsum?",
    answer:
      "Yes, you can customize Lorem Ipsum text by specifying the number of words, characters, or paragraphs you need. There are online Lorem Ipsum generators available for this purpose.",
  },
];

  const toggleAccordion = (id) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  return (
    <div className="my-[90px] text-center w-[80%] mx-auto">
      <div className="mb-4">
        <span className="text-3xl font-Axiforma">FAQs</span>
      </div>
      <div className="join join-vertical w-full">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`collapse collapse-arrow join-item border border-base-300 ${
              openItem === faq.id ? 'collapse-open' : ''
            }`}
          >
            <input
              type="radio"
              name="my-accordion-4"
              checked={openItem === faq.id}
              onChange={() => toggleAccordion(faq.id)}
            />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
