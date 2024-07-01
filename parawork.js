def extract_usernames_passwords(input_file, output_file):
    usernames_passwords = []

    # Abrir arquivo de entrada
    with open(input_file, 'r') as file:
        lines = file.readlines()

        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if line.startswith("Username:"):
                username = line[len("Username:"):].strip()
                if i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    if next_line.startswith("Password:"):
                        password = next_line[len("Password:"):].strip()
                        usernames_passwords.append(f"{username}:{password}")
                        i += 1  # Pular a próxima linha que já foi processada

            i += 1

    # Escrever para o arquivo de saída
    with open(output_file, 'w') as file:
        for item in usernames_passwords:
            file.write(item + "\n")

if __name__ == "__main__":
    input_file = "input.txt"
    output_file = "output.txt"

    extract_usernames_passwords(input_file, output_file)
    print(f"Usuários e senhas foram extraídos para o arquivo {output_file}.")
