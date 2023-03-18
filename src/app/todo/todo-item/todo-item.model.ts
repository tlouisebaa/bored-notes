export class TodoItem {
  id?: number;
  name: string;
  description: string;
  label?: string;

  constructor(id: number, name: string, description: string, label: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.label = label;
  }
}
