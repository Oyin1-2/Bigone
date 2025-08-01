import { useState } from "react";

const questions = [
  {
    q: "What happens if I don't show up to court?",
    a: "If you don't show up to court, a warrant may be issued for your arrest and you could face additional penalties. Always contact your attorney or the court if you cannot attend.",
  },
  {
    q: " Can police search my home without a warrant?",
    a: "Usually, no. Police need a warrant or your permission. But there are exceptions, like if they believe someone is in danger or evidence is being destroyed.",
  },
  {
    q: "What is “innocent until proven guilty”?",
    a: "It means you don't have to prove you're innocent. The government must prove you're guilty in court, beyond a reasonable doubt.",
  },
];

function Questions() {
  const [open, setOpen] = useState(Array(questions.length).fill(false));

  const handleToggle = (idx) => {
    setOpen((open) => open.map((item, i) => (i === idx ? !item : item)));
  };

  return (
    <div id="blog" className="bg-gray-100 h-auto w-full lg:px-[100px] px-4">
      <div
        id="services"
        className="h-[70px] w-full flex flex-col items-center justify-center font-primary text-black text-3xl"
      >
        <div className="w-[70px] border-t-4 border-[#DA954B] my-4"></div>
        <h1 className="text-[1.3rem] lg:text-2xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full flex flex-col justify-start items-center mt-10">
        {questions.map((item, idx) => (
          <div key={idx} className="w-full mb-4">
            <div
              className="w-full font-primary flex justify-between items-start gap-4 p-5 cursor-pointer border"
              onClick={() => handleToggle(idx)}
            >
              <div className="flex flex-col text-[0.9rem] lg:text-2xl text-black">
                <span>{item.q}</span>
                {open[idx] && (
                  <div className="mt-4 text-[0.7rem] lg:text-[1rem] text-black border-t-2 border-gray-400">
                    <p className="pt-5">{item.a}</p>
                  </div>
                )}
              </div>
              <div className="text-[#DA954B] text-xl">
                {open[idx] ? "-" : "+"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
