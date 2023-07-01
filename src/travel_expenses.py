import csv
import datetime

def add_expense(expense_type, amount):
    date = datetime.datetime.now().strftime("%Y-%m-%d")
    with open('expenses.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([date, expense_type, amount])
    print("Expense added successfully.")

def calculate_total_expenses():
    total = 0
    with open('expenses.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)  # Skip the header row
        for row in reader:
            total += float(row[2])
    return total

def display_expense_history():
    with open('expenses.csv', 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            print(f"Date: {row[0]}, Type: {row[1]}, Amount: {row[2]}")

def main():
    while True:
        print("1. Add Expense")
        print("2. Calculate Total Expenses")
        print("3. Display Expense History")
        print("4. Exit")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            expense_type = input("Enter the expense type: ")
            amount = float(input("Enter the expense amount: "))
            add_expense(expense_type, amount)
        elif choice == '2':
            total_expenses = calculate_total_expenses()
            print(f"Total Expenses: {total_expenses}")
        elif choice == '3':
            display_expense_history()
        elif choice == '4':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()