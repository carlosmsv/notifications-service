import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('New friend Request!'),
    category: "test",
    recipientId: 'example-recipient-id',
    ...override,
  });
}