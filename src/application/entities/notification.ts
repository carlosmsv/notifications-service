export interface NotificationProps {
  content: string;
  category: string;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set content(content: string) {
    if(content.length < 5){
      throw new Error("Notification content is too short");
    }

    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}

const notification = new Notification({
  content: "This is a notification",
  category: "General",
}

notification.content = "This is a notification";
