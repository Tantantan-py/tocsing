"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      My name is <input type="text" placeholder="Name" {...register} />
      And my email is <input type="email" placeholder="Email" {...register} />I
      am planning to apply for a program starts at{" "}
      <select {...register("Planing Enrollment Time")}>
        <option value="25 Spring">25 Spring</option>
        <option value="25 Fall">25 Fall</option>
        <option value=" 26 Spring"> 26 Spring</option>
        <option value=" 26 Fall and Later"> 26 Fall and Later</option>
      </select>
      My undergraduate school belongs to{" "}
      <select {...register("University/Institution Background")}>
        <option value="US/CA">US/CA</option>
        <option value="Overseas Except CN mainland">
          Overseas Except CN mainland
        </option>
        <option value="CN Top 5">CN Top 5</option>
        <option value="CN 985">CN 985</option>
        <option value="CN 211">CN 211</option>
        <option value="CN Others">CN Others</option>
      </select>
      And my undergraduate GPA is{" "}
      <input
        type="text"
        placeholder="GPA/Full GPA (eg. 3.7/4.0)"
        {...register}
      />
      My TOEFL/IELTS score is
      <input
        type="text"
        placeholder="e.g. T100, None"
        {...register("English Proficiency Test", {})}
      />
      My GRE is{" "}
      <input type="text" placeholder="Score or None" {...register("GRE", {})} />
      My reaserch/working experiences contain{" "}
      <input
        type="text"
        placeholder="e.g. 3 years on SDE, None"
        {...register("Related Reaserch/Working Experiences", {})}
      />
      My budge per year is up to
      <input
        type="number"
        placeholder="Unit: $USD, Including Living Cost"
        {...register}
      />
      I already got my current target programs list (should listed at least 3
      ranks):
      <textarea {...register("Current Target Programs List", {})} />
      My future plan is (talk about your purpose and ideas in the future, like
      finding a job in US, pursuing PhD and so on)
      <textarea {...register("Future Plan", {})} />
      Any addtional information would help a lot
      <textarea {...register("Additional Information", {})} />
      <input type="submit" />
    </form>
  );
}
