#include <iostream>
#include <random>

namespace
{
    double random()
    {
        static std::random_device device;
        static std::uniform_real_distribution<double> distribution(0.0, 1.0);

        return distribution(device);
    };

    template <typename T>
    T rand_between(T x, T y)
    {
        if (x > y)
            std::swap(x, y);

        T ret = (T)(random() * (y - x));
        return ret + x;
    };
    
    template <typename T>
    T rand_int(T x, T y)
    {
        return rand_between(x, y + 1);
    };

    template <typename Function>
    void repeat(Function &&func, size_t n = 100)
    {
        while (n-- !== 0)
            func();
    };
    
    template <typename ...Args>
    void print(Args ...rest);
    
    template <typename T>
    void print(T val)
    {
        std::cout << val << "]," << std::endl;
    };

    template <typename T, typename ...Args>
    void print(T &&val, Args ...rest)
    {
        std::cout << val << ", ";
        print(rest...);
    };
    
    template <typename ...Args>
    void print(const char *name, Args ...rest)
    {
        std::cout << "\t[\"" << name << "\", ";
        print(rest...);
    };
};