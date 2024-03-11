class Funcionario {

    constructor(nome, idade, salarioBase) {
      this.nome = nome;
      this.idade = idade;
      this.salarioBase = salarioBase;
    }
  
    // Método que calcula o salário do funcionário. Aqui é genérico e retorna 0, mas será sobrescrito nas classes que têm cálculos próprios
    calcularSalario() {
    }
  }
  
  // Define a classe Professor, que é uma extensão de Funcionario
  class Professor extends Funcionario {
    // O construtor da classe Professor inclui as características específicas de um professor (disciplina e horas de aula por semana)
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
      super(nome, idade, salarioBase); // Chama o construtor da classe pai (Funcionario)
      this.disciplina = disciplina;
      this.horasAula = horasAula;
    }
  
    // Este método calcula o salário semanal do professor 
    calcularSalario() {
      return this.horasAula * this.salarioBase; 
    }
  }
  
  // Cria um objeto da classe Professor com informações  fictícios para um professor
  var professorMondra = new Professor('Mondra', 55, 150, 'Química', 20);
  // Cria outro objeto da classe Professor com informações fictícias para outro professor
  var professoraFabi = new Professor('Fabiana', 35, 100, 'Gramática', 20);
  
  // Exibe o salário do professor de química utilizando template strings para interpolar os valores
  console.log(`O professor que dá aulas de ${professorMondra.disciplina} chama-se ${professorMondra.nome}, e seu salário é de R$${professorMondra.calcularSalario()}`);
  // Exibe o salário da professora Julia utilizando template strings para interpolar os valores
  console.log(`A professora que dá aulas de ${professorFabi.disciplina} chama-se ${professorFabi.nome}, e seu salário é de R$${professorFabi.calcularSalario()}`);