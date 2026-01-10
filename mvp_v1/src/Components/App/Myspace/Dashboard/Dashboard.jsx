import React from 'react';
import KanbanBoard from './KanbanBoard';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const nav = useNavigate();
const isauth = useSelector((state)=>state.user.isAuthenticated);
if (!isauth) {
  nav("/signin");
}
  return (
    <div className='bg-[#0A0A0A] h-full w-full rounded-xl px-[0.75rem] py-3 border border-[#29292D]' >
      <KanbanBoard/>
    </div>
  );
};

export default Dashboard;