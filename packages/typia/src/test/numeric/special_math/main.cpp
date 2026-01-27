// Compiled on https://wandbox.org/
#include "utils.hpp"

#include <iostream>
#include <algorithm>
#include <boost/numeric/special_functions.hpp>

#define K 10
#define PI (acos(-1) / 2.0)

void bessels()
{
    double v = rand_between<double>(-K, K);
    double x = rand_between<double>(-K, K);
    unsigned int n = rand_int(0, K);

    double i = boost::math::cyl_bessel_i((x < 0) ? floor(v) : v, x);
    double j = boost::math::cyl_bessel_j((x < 0) ? floor(v) : v, x);
    double k = boost::math::cyl_bessel_k(v, abs(x)); // x > 0
    double neumann = boost::math::cyl_neumann(v, abs(x)); // x > 0

    double sph = boost::math::sph_bessel(n, abs(x)); // unsigned int, x > 0
    double sph_nm = boost::math::sph_neumann(n, abs(x)); // unsigned int, x > 0

    print("cyl_bessel_i", (x < 0) ? floor(v) : v, x, i);
    print("cyl_bessel_j", (x < 0) ? floor(v) : v, x, j);
    print("cyl_bessel_k", v, abs(x), k);
    print("cyl_neumann", v, abs(x), neumann);

    print("sph_bessel", n, abs(x), sph);
    print("sph_neumann", n, abs(x), sph_nm);
}

void betas()
{
    double x = rand_between<double>(0, K);
    double y = rand_between<double>(0, K);

    print("beta", x, y, boost::math::beta(x, y));
}

void ellints()
{
    double k = rand_between<double>(-1, 1);
    double phi = rand_between<double>(-PI, PI);
    double v = rand_between<double>(0, 1 / (pow(sin(phi), 2.0)));

    double first = boost::math::ellint_1(k, phi);
    double second = boost::math::ellint_2(k, phi);
    double third = boost::math::ellint_3(k, v, phi);

    print("ellint_1", k, phi, first);
    print("ellint_2", k, phi, second);
    print("ellint_3", k, v, phi, third);
}

void expints()
{
    double x = rand_between<double>(-K, K);

    print("expint", x, boost::math::expint(x));
}

void hermites()
{
    unsigned int n = rand_int(0, K);
    double x = rand_between<double>(-K, K);

    print("hermite", n, x, boost::math::hermite(n, x));
}

void laguerres()
{
    unsigned int n = rand_int(0, K);
    unsigned int m = rand_int(0, K);
    double x = rand_between<double>(-K, K);

    double ret = boost::math::laguerre(n, m, x);
    print("assoc_laguerre", n, m, x, ret);
}

void legendres()
{
    unsigned int n = rand_int(0, K);
    unsigned int m = rand_int(0, K);
    double x = rand_between<double>(-1, 1);

    double ret = boost::math::legendre_p(n, m, x);
    print("assoc_legendre", n, m, x, ret);
}

void zetas()
{
    double x = rand_between<double>(-K, K);

    print("riemann_zeta", x, boost::math::zeta(x));
}

int main()
{
    std::cout << "[" << std::endl;
    {
        repeat(bessels);
        repeat(betas);
        repeat(ellints);
        repeat(expints);
        repeat(hermites);
        repeat(laguerres);
        repeat(legendres);
        repeat(zetas);
        std::cout << "\t[\"clamp\", 1, 6, 5, 5]" << std::endl;
    };
    std::cout << "]" << std::endl;

    system("pause");
    return 0;
}