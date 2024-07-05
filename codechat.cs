using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static int Sum(IEnumerable<int> numbers)
    {
        return numbers.Sum();
    }

    static void Main()
    {
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n < 1 || n > 100)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            return;
        }

        var numbers = new List<int>();
        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            if (!int.TryParse(Console.ReadLine(), out int num))
            {
                Console.WriteLine("Invalid input. Please enter valid integers.");
                return;
            }
            numbers.Add(num);
        }

        int total = Sum(numbers);
        Console.WriteLine($"Sum of the numbers: {total}");
    }
}