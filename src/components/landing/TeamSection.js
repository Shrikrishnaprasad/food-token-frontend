import Title from "components/landing/Title";
import TeamCard from "components/landing/TeamCard";

export default function TeamSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Here are our heroes">We Dream Big And Do Bigger</Title>
        <div className="flex flex-wrap">
          <TeamCard
            img="https://images.unsplash.com/photo-1584048333516-bdf1d5305f1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            name="Jenna Kardi"
            position="Founder and CEO"
          />

          <TeamCard
            img="https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            name="Romina Hadid"
            position="Marketing Specialist"
          />
          <TeamCard
            img="https://images.unsplash.com/photo-1533540499377-cf2dec26c3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Robin Hood"
            position="Chief Cook"
          />
          <TeamCard
            img="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
      </div>
    </section>
  );
}
