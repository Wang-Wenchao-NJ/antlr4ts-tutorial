
#include "TransactionContext.h"

WORD32 ActlCrtSmCtxReqHandle(ActlTransCtx &context, WORD32 msgId, void* msg)
{
    return ACTL_SUCCESS;
}

WORD32 ActlSendCrtSmCtxRsp(ActlTransCtx &context, WORD32 msgId, bool isSync)
{
    return ACTL_SUCCESS;
}


WORD32 ActlPreProcCrtSmCtxReq(ActlTransCtx &context, void *msg, WORD32 msgId)
{
    return DISPATCH_TYPE_SMF_CRT_SESS;
}

WORD32 ActlPreProcUpdSmCtxReq(ActlTransCtx &context, void *msg, WORD32 msgId)
{
    return DISPATCH_TYPE_SMF_UPD_SESS;
}

WORD32 ActlPreProcRelSmCtxReq(ActlTransCtx &context, void *msg, WORD32 msgId)
{
    return DISPATCH_TYPE_SMF_REL_SESS;
}

WORD32 ActlPreProcUpfSessRpt(ActlTransCtx &context, void *msg, WORD32 msgId)
{
    return DISPATCH_TYPE_DDN_PAGING;
}


ActlTransCtx *ActlGetN4RspMsgTransCtx(void *msg, WORD32 msgId)
{
    return NULL;
}


bool ActlIsN2Rel(ActlTransCtx &context)
{
    return true;
}