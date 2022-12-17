import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";


const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  }
}


describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a test notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy()
  });  
});
