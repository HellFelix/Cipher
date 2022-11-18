numbers = []
import numpy as np
possible = []

for j in range(32, 127, 1):
    possible.append(j)

used = []
i= 32
while len(possible) > 0:
    n1 = np.random.randint(0, len(possible))
    number1 = possible[n1]
    n2 = np.random.randint(0, len(possible))
    number2 = possible[n2]
    if not number1 in used:
        if number1 != number2:
            numbers.append([number2, number1])
            numbers.append([number1, number2])
        else:
            numbers.append([number2, number1])
        used.append(number1)
        used.append(number1)
        possible.remove(number1)
        if number2 in possible:
            possible.remove(number2)
        
print(numbers)