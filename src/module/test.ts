// *****
/**
class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) { }
}

class Delivery {
    constructor(public date: Date) { }
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date)
    }
}
class ShopDelivery extends Delivery {
    constructor(date: Date, public shopId: string) {
        super(new Date())
    }
}
type DeliveryOptions = HomeDelivery | ShopDelivery;
class Cart {
    private products: Product[] = [];
    private delivery!: DeliveryOptions;

    public addProduct(product: Product): void {
        this.products.push(product);
    }
    public deleteProductById(productId: number): void {
        this.products = this.products.filter((p: Product) => p.id !== productId)
    }
    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2)
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }
    public checkOut() {
        if (this.products.length === 0) {
            throw new Error('there is no products in the Cart!')
        }
        if (!this.delivery) {
            throw new Error('there is no Delivery Option!')
        }
        return { success: true }
    }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'choco', 100));
cart.addProduct(new Product(2, 'coke', 120));
cart.addProduct(new Product(2, 'beer', 150));
cart.deleteProductById(1);
cart.setDelivery(new HomeDelivery(new Date(), 'Almaty'));
console.log(cart.getSum());
console.log(cart.checkOut());

// ******* Абстрактный logger

abstract class Logger {
    abstract log(message: string): void;
    printDate(date: Date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }
    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const logger = new MyLogger();
logger.logWithDate('my message')
*/
// ******   Generic function

function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString()
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(toString(3));
console.log(toString(true));
console.log(toString(['a', 'g']));
console.log(toString({ a: 1 }));
