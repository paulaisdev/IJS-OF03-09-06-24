const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", () => {
  test("Retorna se é um pacote básico", () => {
    const totalHoras = 49;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  });

  test("Retorna pacote básico caso o número total de horas exatamente 50", () => {
    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });

  test("Retorna se é um pacote intermediário", () => {
    const totalHoras = 51;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario");
  });

  test("Retorna se é um pacote premium", () => {
    const totalHoras = 101;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium");
  });
});
