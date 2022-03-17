import { useJobs } from '../init/useJobs';
import JobItem from '../components/JobItem';
import React from 'react';
import SearchInput from '../components/SearchInput';
import FilterInput from '../components/FilterInput';
import FieldOfActivity from '../components/FieldOfActivity';
import SelectGroup from '../components/Selectgroup';
import { Link } from "react-router-dom";
import SearchArea from '../components/SearchArea';
import Salary from '../components/Salary';
import {MainContainer, Header, PersonalArea, Content, Main, SideBar, HeaderContainer, ContentContainer, SearchPanel, JobList, SearchContainer  } from '../styles';


function MainPage() {
  const {jobs} = useJobs();
  return (
      <MainContainer>
        <HeaderContainer>
        <Header>
          <ul>
            <li><Link to="jobs">Jobs</Link></li>
            <li><Link to="specialist">Specialist</Link></li>
            <li><Link to="companies">Companies</Link></li>
            <li><Link to="salaries">Salaries</Link></li>
          </ul>
          <PersonalArea href="#">Enter</PersonalArea>
        </Header>
        </HeaderContainer>
        <ContentContainer>
        <Content>
          <Main>
          <SearchPanel>
           <SearchInput />
            <FilterInput />
          </SearchPanel>
          <JobList>
          {jobs.map(job => <JobItem title={job.title} company={job.company} salary={job.salary} />)}
          </JobList>
          </Main>
          <SideBar>
             <FieldOfActivity />
             <SelectGroup />
              <SearchContainer>
                <Salary />
                <SearchArea />
              </SearchContainer>
          </SideBar>
        </Content>
        </ContentContainer>
        
      </MainContainer>  
  );
}

export default MainPage;


