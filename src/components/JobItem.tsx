import { FC } from 'react';

type Props = {
  title: string;
  company: string;
  salary: number;
}

const JobItem: FC<Props> = (props) => {
  return (
    <p>
      {props.title}
      {props.company}
      {props.salary}
    </p>
  )
}

export default JobItem;

