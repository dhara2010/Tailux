import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Application from "./Applications";
import Table from "./Table";
import Prototype from "./Prototype";
import Forms from "./Forms";
import Component from "./Component";

function Templates() {
  return (
   
      <div className="min-h-screen flex flex-col">
        <div className="text-center mt-23">
          <h1 className="font-bold text-[34px]">Explore Template</h1>
          <p className="text-neutral-400">
            Tailux offers a wide range of stunning dashboards, apps, prototypes, components, and forms:
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-72 h-screen lg:sticky top-0">
            <Navbar />
          </div>
          <div className="lg:flex-1 lg:overflow-y-auto lg:overflow-hidden px-4 mt-5">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path="applications" element={<Application />} />
              <Route path="table" element={<Table />} />
              <Route path="prototype" element={<Prototype />} />
              <Route path="forms" element={<Forms />} />
              <Route path="component" element={<Component />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default Templates;
