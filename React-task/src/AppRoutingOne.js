import{ BrowserRouter as Router, Route, Link, Routes, Navigate, useNavigate} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import NotFoundPage from './pages/404/notFoundPage';
import React, { useEffect } from 'react'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/tasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import ProtectedRoute from './pages/auth/ProtectedRoute';
import LoginPage from './pages/auth/loginPage';

function AppRoutingOne() {
  return (
      <Router>
        <div>
          <aside>
            <Link to={'/'}>| HOME |</Link>
            <Link to={'/about'}>| ABOUT |</Link>
            <Link to={'/faqs'}>| FAQS | </Link>
            <Link to={'/login'}>|LOGIN|</Link>
          </aside>
        </div>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/faqs' element={<AboutPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/profile' element={<ProtectedRoute Component={ProfilePage} defaultRoute='/login'/>}>
          </Route>
          <Route path='/tasks' element={<TasksPage/>}></Route>
          <Route path='/tasks/:id' element={<TaskDetailPage/>}></Route>
          {/* Error route */}
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </Router>
  );
}

export default AppRoutingOne;
