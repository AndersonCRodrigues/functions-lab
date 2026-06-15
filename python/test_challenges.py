import pytest
from challenges import (
    compare_true, calc_area, split_sentence, concat_name,
    football_points, highest_count, cat_and_mouse, fizz_buzz,
    encode, decode, tech_list, generate_phone_number,
    triangle_check, hydrate,
)


# Desafio 1
class TestCompareTrue:
    def test_false_and_true(self):
        assert compare_true(False, True) == False

    def test_false_and_false(self):
        assert compare_true(False, False) == False

    def test_true_and_true(self):
        assert compare_true(True, True) == True


# Desafio 2
class TestCalcArea:
    def test_10_50(self):
        assert calc_area(10, 50) == 250

    def test_5_2(self):
        assert calc_area(5, 2) == 5

    def test_51_1(self):
        assert calc_area(51, 1) == 25.5


# Desafio 3
class TestSplitSentence:
    def test_two_words(self):
        assert split_sentence('go Trybe') == ['go', 'Trybe']

    def test_three_words(self):
        assert split_sentence('vamo que vamo') == ['vamo', 'que', 'vamo']

    def test_one_word(self):
        assert split_sentence('foguete') == ['foguete']


# Desafio 4
class TestConcatName:
    def test_four_elements(self):
        assert concat_name(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) == 'Paolillo, Lucas'

    def test_last_first(self):
        assert concat_name(['foguete', 'não', 'tem', 'ré']) == 'ré, foguete'

    def test_repeated(self):
        assert concat_name(['captain', 'my', 'captain']) == 'captain, captain'


# Desafio 5
class TestFootballPoints:
    def test_14_wins_8_ties(self):
        assert football_points(14, 8) == 50

    def test_1_win_2_ties(self):
        assert football_points(1, 2) == 5

    def test_zero(self):
        assert football_points(0, 0) == 0


# Desafio 6
class TestHighestCount:
    def test_two_nines(self):
        assert highest_count([9, 1, 2, 3, 9, 5, 7]) == 2

    def test_one_nine(self):
        assert highest_count([0, 4, 4, 4, 9, 2, 1]) == 1

    def test_three_zeros(self):
        assert highest_count([0, 0, 0]) == 3


# Desafio 7
class TestCatAndMouse:
    def test_cat2_closer(self):
        assert cat_and_mouse(2, 5, 4) == 'cat2'

    def test_cat1_closer(self):
        assert cat_and_mouse(6, 12, 18) == 'cat1'

    def test_tie(self):
        assert cat_and_mouse(5, 3, 7) == 'os gatos trombam e o rato foge'


# Desafio 8
class TestFizzBuzz:
    def test_mixed(self):
        assert fizz_buzz([2, 15, 7, 9, 45]) == ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']

    def test_bug_and_fizz(self):
        assert fizz_buzz([7, 9]) == ['bug!', 'fizz']

    def test_fizz_and_buzz(self):
        assert fizz_buzz([9, 25]) == ['fizz', 'buzz']


# Desafio 9
class TestEncodeDecode:
    def test_encode_hello(self):
        assert encode('hello') == 'h2ll4'

    def test_encode_sentence(self):
        assert encode('How are you today?') == 'H4w 1r2 y45 t4d1y?'

    def test_decode_simple(self):
        assert decode('h3 th2r2!') == 'hi there!'

    def test_decode_sentence(self):
        assert decode('H4w 1r2 y45 t4d1y?') == 'How are you today?'


# Desafio 10
class TestTechList:
    def test_sorted_list(self):
        result = tech_list(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
        assert result == [
            {'tech': 'CSS', 'name': 'Lucas'},
            {'tech': 'HTML', 'name': 'Lucas'},
            {'tech': 'JavaScript', 'name': 'Lucas'},
            {'tech': 'Jest', 'name': 'Lucas'},
            {'tech': 'React', 'name': 'Lucas'},
        ]

    def test_empty_list(self):
        assert tech_list([], 'Lucas') == 'Vazio!'


# Desafio 11 (Bônus)
class TestGeneratePhoneNumber:
    def test_wrong_size(self):
        assert generate_phone_number([1, 2, 3]) == 'Array com tamanho incorreto.'

    def test_negative_number(self):
        assert generate_phone_number([-1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) == \
            'não é possível gerar um número de telefone com esses valores'

    def test_number_above_9(self):
        assert generate_phone_number([10, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) == \
            'não é possível gerar um número de telefone com esses valores'

    def test_repeated_3_times(self):
        assert generate_phone_number([1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 2]) == \
            'não é possível gerar um número de telefone com esses valores'

    def test_valid(self):
        assert generate_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) == '(12) 34567-8901'


# Desafio 12 (Bônus)
class TestTriangleCheck:
    def test_valid_triangle(self):
        assert triangle_check(10, 14, 8) == True

    def test_side_too_large(self):
        assert triangle_check(1, 2, 10) == False

    def test_side_equal_difference(self):
        assert triangle_check(3, 7, 4) == False


# Desafio 13 (Bônus)
class TestHydrate:
    def test_one_drink(self):
        assert hydrate('1 cerveja') == '1 copo de água'

    def test_multiple_drinks(self):
        assert hydrate('1 cachaça, 5 cervejas e 1 copo de vinho') == '7 copos de água'
