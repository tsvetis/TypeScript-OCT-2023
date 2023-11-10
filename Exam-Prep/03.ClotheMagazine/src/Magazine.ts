import { Cloth } from "./Cloth";

export class Magazine {
  type: string;
  capacity: number;
  clothes: Cloth[];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
    this.clothes = [];
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    const index = this.clothes.findIndex((c) => c.color === color);

    if (index !== -1) {
      this.clothes.splice(index, 1);
      return true;
    }

    return false;
  }

  getSmallestCloth(): Cloth {
    const smallestCloth = [...this.clothes].sort((a, b) => a.size - b.size)[0];
    return smallestCloth;
  }

  getCloth(color: string): Cloth {
    const cloth = this.clothes.find((c) => c.color === color);
    return cloth;
  }

  getClothCount(): number {
    const count = this.clothes.length;
    return count;
  }

  report(): string {
    const sortedClothes = [...this.clothes].sort((a, b) => a.size - b.size);
    const clothesForReport = sortedClothes.map((c) => c.toString()).join("\n");

    const report = `${this.type} magizne contains:\n${clothesForReport}`;
    return report;
  }
}
