export class TodoItem {
  public title: string;
  public detail: string;
  public labels: string[];
  public color: string;

  constructor(title: string, detail: string, labels: string[], color: string) {
    this.title = title;
    this.detail = detail;
    this.labels = labels;
    this.color = color;
  }
}
