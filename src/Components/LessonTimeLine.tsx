import React from 'react';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot} from "@mui/lab";

export const LessonTimeLine = () => {
  return (
    <Timeline>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Yemek Ye</TimelineContent>
    </TimelineItem>

    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Kod Yaz</TimelineContent>
    </TimelineItem>

    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
        </TimelineSeparator>
        <TimelineContent>Git uyu</TimelineContent>
    </TimelineItem>
</Timeline>
  )
}
