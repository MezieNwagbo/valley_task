import MessageContainer from "./MessageContainer";

import MessageInputSection from "./MessageInputSection";

const Messages = () => {
  return (
    <section className="h-[calc(100vh-10rem)] ">
      <MessageContainer />
      <MessageInputSection />
    </section>
  );
};

export default Messages;
