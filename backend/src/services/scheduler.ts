import { CreateScheduleCommand, SchedulerClient } from '@aws-sdk/client-scheduler';
import { handler } from './blahhh';

export async function outageScheduler(outageTime: any, triggerType: string) {
  try {
    console.log(triggerType);
    //   const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat'];
    const date = new Date(outageTime);
    //   const day = date.getDate();
    //   const dayOfWeek = date.getDay();
    //   const dayName = dayNames[dayOfWeek];
    //   const month = date.getMonth() + 1;
    //   const year = date.getFullYear();
    //   const minutes = date.getMinutes();
    //   const hours = date.getHours();

    const ruleName = 'example-outage';
    //   const scheduleExpression = `cron(${minutes} ${hours} ${day} ${month} ${dayName} ${year}) `; // Replace with your desired date and time
    //   console.log(scheduleExpression);
    const targetId = 'outageScheduler';
    const targetArn = `arn:aws:lambda:eu-west-1:340571445489:function:${targetId}`;
    const validDate = `${date.toISOString().substring(0, 19)}`;

    // const schedulerClient = new SchedulerClient();

    // const scheduleCommand = new CreateScheduleCommand({
    //   Name: `SLOT-outage-${triggerType}${validDate.replace(':', '-').replace(':', '-')}`,
    //   Description: 'Test description',
    //   ScheduleExpression: `at(${validDate})`,
    //   Target: {
    //     RoleArn: 'arn:aws:iam::340571445489:role/service-role/outageScheduler-role-3z70ye0a',
    //     Arn: targetArn,
    //     Input: JSON.stringify({
    //       type: 'SLOT',
    //       triggerType: `${triggerType}`,
    //     }),
    //   },
    //   FlexibleTimeWindow: {
    //     Mode: 'OFF',
    //   },
    // });
    // const rule = await schedulerClient.send(scheduleCommand);

    console.log('Schedule created successfully.');
    await handler(
      JSON.stringify({
        type: 'SLOT',
        triggerType: `${triggerType}`,
      }),
    );
    return;
  } catch (error) {
    console.error('Error creating schedule:', error);
  }
}

