
#ifndef TRANSACTION_CONTEXT_H
#define TRANSACTION_CONTEXT_H

#include "type.h"

struct TransactionRuntime
{
    /* data */
};

struct ActlTransCtx
{
    TransactionRuntime runtime;
    WORD32 id;
};

#define ACTL_SUCCESS    0
#define ACTL_FAIl       1


#endif