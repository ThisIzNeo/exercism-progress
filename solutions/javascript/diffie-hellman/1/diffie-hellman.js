export class DiffieHellman {
  constructor(p, g) {
    if (!DiffieHellman.#isPrime(p) || !DiffieHellman.#isPrime(g)) {
      throw new Error('p and g must be prime.');
    }
    this.p = p;
    this.g = g;
  }

  static getPrivateKey(p) {
    const min = 2;
    const max = p - 1;
    const key = Math.floor(Math.random() * (max - min)) + min;

    if (key <= 1 || key >= p) {
      throw new Error('Private key out of range');
    }
    return key;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return DiffieHellman.#modExp(this.g, privateKey, this.p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    if (myPrivateKey <= 1 || myPrivateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return DiffieHellman.#modExp(theirPublicKey, myPrivateKey, this.p);
  }

  static #isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  static #modExp(base, exponent, modulus) {
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) result = (result * base) % modulus;
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  }
}
