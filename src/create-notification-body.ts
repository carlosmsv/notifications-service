import { IsNotEmpty } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}