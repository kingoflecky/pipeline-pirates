import { Request, Response, Router } from 'express';
import { validateJiraTicket } from '../services/validator-service';
import { outageScheduler } from '../services/scheduler';

export const submitRouter: Router = Router();

submitRouter.get('/v1/submit', async (req: Request, res: Response) => {
  try {
    console.log('beginning submit');

    if (req.body == undefined) {
      return 400;
    }
    const mappedFields = await validateJiraTicket(req.body.jiraTicket);

    console.log(mappedFields);
    let triggerType: string;
    for (const [key, value] of Object.entries(mappedFields)) {
      if (key === 'breakglassUser') {
        continue;
      }
      console.log(key);
      triggerType = key === 'outageStartTime' ? 'ON' : 'OFF';
      console.log(triggerType);
      await outageScheduler(value, triggerType);
    }
    res.send('Jira ticket is valid; scheduled CRON');
  } catch {
    res.send('Jira ticket is not valid');
  }
});

