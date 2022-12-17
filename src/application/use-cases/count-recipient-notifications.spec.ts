import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);


    await notificationsRepository.create(
      new Notification({
        category: "test",
        content: new Content('New friend request!'),
        recipientId: 'recipient-1',
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: "test",
        content: new Content('Another friend request!'),
        recipientId: 'recipient-1',
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: "test",
        content: new Content('Friend request to another recipient!'),
        recipientId: 'recipient-2',
      })
    );


    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });
    

    expect(count).toEqual(2);
  });
  
});
