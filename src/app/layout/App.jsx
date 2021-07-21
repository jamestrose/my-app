import React, {useState} from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/events/event-dashboard/EventDashboard";
import EventForm from "../../features/events/eventForm/EventForm";
import NavBar from "../../features/nav/NavBar";
import EventDetailedPage from "../../features/events/eventForm/eventDetailed/EventDetailedPage"; 

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  
  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
}

function handleCreateFormOpen(){
  setSelectedEvent(null);
  setFormOpen(true);
}

  return (
    <>
    <Route exact path='/' component={HomePage}/>
    <Route path={'/(.+)'} render={() =>(
      <>
        <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'> 
        <Route exact path='/events' component={EventDashboard}/>
        <Route path='/events/:id' component={EventDetailedPage}/>
        <Route path='/createEvent' component={EventForm}/>
      </Container>
    </>
  )}
/>
</>
);
}



