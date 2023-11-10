export class Cloth {
  color: string;
  size: number;
  type: string;

  constructor(color: string, size: number, type: string) {
    this.color = color;
    this.size = size;
    this.type = type;
  }

  toString(): string {
    return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
  }
}
