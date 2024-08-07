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
      My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      , and my email is{" "}
      <input
        type="email"
        placeholder="your@email"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      . I am planning to apply for a program starts at{" "}
      <select
        {...register("Planing Enrollment Time")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      >
        <option value="25 Spring">25 Spring</option>
        <option value="25 Fall">25 Fall</option>
        <option value=" 26 Spring"> 26 Spring</option>
        <option value=" 26 Fall and Later"> 26 Fall and Later</option>
      </select>
      <br /> My undergraduate school belongs to{" "}
      <select
        {...register("University/Institution Background")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      >
        <option value="US/CA">US/CA</option>
        <option value="Overseas Except CN mainland">
          Overseas Except CN mainland
        </option>
        <option value="CN Top 5">CN Top 5</option>
        <option value="CN 985">CN 985</option>
        <option value="CN 211">CN 211</option>
        <option value="CN Others">CN Others</option>
      </select>
      , and my undergraduate GPA is{" "}
      <input
        type="text"
        placeholder="e.g. 3.7/4.0"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      . My TOEFL/IELTS score is
      <input
        type="text"
        placeholder="e.g. T100, None"
        {...register("English Proficiency Test", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      , and my GRE is{" "}
      <input
        type="text"
        placeholder="Score or None"
        {...register("GRE", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      <br />
      My reaserch/working experiences contain{" "}
      <input
        type="text"
        placeholder="e.g. 3 years as SDE"
        {...register("Related Reaserch/Working Experiences", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      . My budge (Including Living Cost) per year is up to
      <input
        type="number"
        placeholder="Unit: $USD"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      <br />
      <br />
      If applicable, I already got my current target programs list, which should
      be listed at least 3 ranks (Lottery, Matched, Guaranteed) for different
      "School - Program":
      <br />
      <textarea
        {...register("Current Target Programs List", {})}
        placeholder="
        Lottery: XXX University - MS CS / ... ;
        Matched: XXX University - MS CE / ... ;
        Guaranteed: XXX University - MS ECE / ..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      <br />
      My (short-term/long-term) future plan is:
      <br />
      <textarea
        {...register("Future Plan", {})}
        placeholder="e.g. your expectation/idea for your future, like finding a job in US, pursuing PhD, applying top-ranking university..."
        rows={2}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      <br />
      Any addtional information would help a lot:
      <br />
      <textarea
        {...register("Additional Information", {})}
        placeholder="e.g. Preferred Contact using Wechat: leave your Wechat ID here"
        rows={2}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border:text-center bg-transparent"
      />
      <br />
      <input
        type="submit"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded-xl cursor-pointer"
      />
    </form>
  );
}
